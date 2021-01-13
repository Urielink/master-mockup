/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
// T7 Clase de modulo, se definirá la funcion de edicion de bloque
import { Component, Fragment } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, ToolbarGroup, ToolbarButton, Placeholder, Disabled, TextControl } from '@wordpress/components';

/**
 * T8 PHP render.
 * P1) Se importa server side render, y los valores se asignarán a un control segun se ocupe.
 * Aqui se necesita "TextControl" para crear un input que asigne el id de un articulo.
 * Ese ID se asignará en la variable: "selectedPostId" que se ejecuta desde un call back en master-mockup.php. 
 */
import ServerSideRender from '@wordpress/server-side-render';



import { __ } from '@wordpress/i18n';
import './style.scss';
// Internal dependencies
import Edit from './edit';
import save from './save';

/**
 * T7 Clase de modulo, se definirá la funcion de edicion de bloque
 *
 * NOTA. despues de varias pruebas.
 * Crear una clase para crear estados, no tine soporte en esta nueva version de API.
 * https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-blocks-part-7-create-custom-components/
 * https://make.wordpress.org/core/2020/11/18/block-api-version-2/
 *
	class FuncionDeBloque extends Component {
		render() {
			const { attributes, setAttributes } = this.props;
			return ...
		}
	}

 * - - render es una función de react, que en este caso hará lo que edit().
 * - - Y como en edit(), se declaran las variables y se hace uso de props 
 * - - pero con "this" para asignar la funcion de cada cosa.
 * 
 * NOTA 2: Definitivamente no resulto esta parte del tutorial.
 * Lo más conveniente para crear un estado de edicion o preview, es ocupar los elementos del inspector.
 * Y agregar la logica en la fucnion de de edit(), ya que permite caragr funciones del core.
 * Además por usabilidad, es una mejor alternativa, y no carga toda la responsabilidad al bloque.
 * 
 * NOTA 3: construir un bloque como clase si funciona respecto a lo establecido por react.
 * Incluso, jugar con los estados de edicion y así como ocupar fragment u otros componentes para simular editabilidad o no.
 * Pero el uso de useBlockProps, no funciona.
 * 
 */

// function FuncionDeBloque(props){
class FuncionDeBloque extends Component{

	// Nota: acorde a la documentacion, las funciones propias, se pueden llamar sin problema.
	// experimento = ( midato ) => {
	// 	console.log( 'Primero ' + midato );
	// }

	/** 
	 * T7 P1: Estados de modulo
	 * https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-blocks-part-7-create-custom-components/
	 */
	constructor(props) {
		super(props);
		this.state = {
			editMode: true
		}
	}

	getInspectorControls = () => {
		const { attributes, setAttributes } = this.props;
		return (
			<InspectorControls>
				<PanelBody
					title="Most awesome settings ever"
					initialOpen={true}
				>
					<PanelRow>
						<ToggleControl
							label="Toggle me"
							checked={attributes.toggle}
							onChange={(toggle) => setAttributes({ toggle })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="What's animal?"
							value={attributes.favoriteAnimal}
							options={[
								{label: "Dogs", value: 'dogs'},
								{label: "Cats", value: 'cats'},
								{label: "Something else", value: 'weird_one'},
							]}
							onChange={(favoriteAnimal) => setAttributes({ favoriteAnimal })}
						/>
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.favoriteColor}
							onChangeComplete={ (newval) => setAttributes({ favoriteColor: newval.hex }) }
							disableAlpha // deshabilita transparencia
						/>
					</PanelRow>
					<PanelRow>
						<CheckboxControl
							label="Activate lasers?"
							checked={attributes.activateLasers}
							onChange={(activateLasers) => setAttributes({ activateLasers })}
						/>
					</PanelRow>
					{/* T7 P2B:Estados de Modulos, argumentos a boton
						Es correcto, los cambios de estado se ejecutan bien desde el inspector.
					 */}
					<PanelRow>
						<CheckboxControl
							label="Modo"
							checked={attributes.activateLasers}
							onChange={() => this.setState({ editMode: !this.state.editMode })}
						/>
					</PanelRow>
					{/* T8 P4) Control para cambios en el bloque con ServerSideRender.
					 /* esta variable se determina en los atributos del bloque y se ocupara
					 tambien en un call back en master-mockup.php.
					 */}
					<TextControl
						label={__("Type in post ID", 'awhitepixel')}
						type="number"
						value={attributes.selectedPostId} // variable
						onChange={(newval) => setAttributes({ selectedPostId: parseInt(newval) })}
					/>

				</PanelBody>
			</InspectorControls>
		);
	}

	getBlockControls = () => {
		const { attributes, setAttributes } = this.props;
		return (
			<BlockControls>
				<AlignmentToolbar
					value={attributes.textAlignment}
					onChange={(newalign) => setAttributes({ textAlignment: newalign })}
				/>

				<ToolbarGroup>
					{/* <ToolbarButton 
						icon="smiley" 
						label="Sonrie"
						onClick={() => console.log('sonrie')}
					/> */}
					{/* T7 P2:Estados de Modulos, argumentos a boton
						lo ejecutaré en el inspector posteriormente.
					 */}
					<ToolbarButton 
						icon={ this.state.editMode ? "format-image" : "edit" }
						label={ this.state.editMode ? "Preview" : "Edit" }
						onClick={() => this.setState({ editMode: !this.state.editMode })}
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	}

	render() {
	/* T7 P2:Estados de Modulos */
		// this.setState({ example: 2 });
		// console.log(this.state.example);

	/* P1 Se declara los recursos */
	const { attributes, setAttributes } = this.props;
		// const alignmentClass = (attributes.textAlignment != null) ? 'bg-warning text-' + attributes.textAlignment : '';
		// 	const blockProps = useBlockProps( { className: alignmentClass } );
			// const blockProps = useBlockProps();

	/* P2 Se generan dinamicas, funciones etc.*/
	/* P3 Se imprime el resultado */
		// const resultados = (
			return (
			// <div { ...blockProps }>
			<div>
				{	/* T7 P3:Estados de Modulos: llamar Controles originales fuera para no deshabilitarlos*/}
				{ this.getInspectorControls() }
				{ this.getBlockControls() }

				{this.state.editMode && 
					<Fragment>
						{/* { this.experimento( 'hola' ) } */}
						{/* Controles originales */}
						{/* { this.getInspectorControls() } */}
						{/* { this.getBlockControls() } */}

						<p>{ attributes.exampleText }</p>
						<p>{ attributes.postIds }</p>
						<RichText
							tagName="h2"
							value={attributes.myRichText}
							onChange={ ( myRichText ) => setAttributes( { myRichText } ) }
							placeholder={ __( 'Escribele aqui h2 (c/traduccion)...' ) }
						/>
						{ attributes.toggle && 
							<div className="lasers">Toggle on</div>
						}
							<div className="animal"> {attributes.favoriteAnimal} </div>
							<div className="color"> {attributes.favoriteColor} </div>
						{ attributes.activateLasers && 
							<div className="lasers">Lasers activados</div>
						}
					</Fragment>
				}
				{/* {!this.state.editMode && 
					<Placeholder isColumnLayout={true}>
						<Disabled>
							<RichText.Content 
								tagName="h2"
								value={attributes.myRichHeading}
							/>
							<RichText.Content
								tagName="p"
								value={attributes.myRichText}
							/>
						</Disabled>
					</Placeholder>
				} */}
				{/** 
				 * T8 reemplazar el contenido
				 * En este caso se pasan los controles al bloque previsualiado.
				 * Si se omite alguno que no esté es probable que ocurra un error.
				 */}
				{!this.state.editMode &&
					<ServerSideRender
						block={this.props.name}
						attributes={{
							myRichHeading: attributes.myRichHeading,
							myRichText: attributes.myRichText,
							textAlignment: attributes.textAlignment,
							toggle: attributes.toggle,
							favoriteAnimal: attributes.favoriteAnimal,
							favoriteColor: attributes.favoriteColor,
							activateLasers: attributes.activateLasers,
							selectedPostId: attributes.selectedPostId,
						}}
					/>
				}


			</div>
		);
		// return resultados;
	}

}

registerBlockType( 'my-mockups/master-mockup', {
	apiVersion: 2,
	title: __( 'Utilidades de bloque', 'master-mockup' ),
	description: __( 'Descripcion opcional', 'master-mockup' ),
	category: 'widgets',
	icon: 'carrot',
	attributes: {
		exampleText: {
			type: 'string',
			default: 'mi texto default val exampleText',
			selector: 'p', // se debe coordinar el uso de selectores.
		},
		postIds: {
			type: 'array',
			default: [1,2,3,4],
			selector: 'p', 
		},
		myRichText: {
			type: 'string',
			source: 'html',
			default: '', // sin dato pero declarado default.
			selector: 'h2', 
		},
		toggle: {
			type: 'boolean',
			default: true
		},
		favoriteAnimal: {
			type: 'string',
			default: 'dogs'
		},
		favoriteColor: {
			type: 'string',
			default: '#DDDDDD'
		},
		activateLasers: {
			type: 'boolean',
			default: false
		},
		//toolbar
		align: {
			type: 'string',
			default: 'wide'
		},
		textAlignment: {
			type: 'string',
		},
		/* T8 P3) Setup variable.
			Variable que se ocupara tambien en master-mockup.php. 
		*/
		selectedPostId: {
			type: 'number'
		},
	},
	supports: {
		html: false,
		//toolbar
		align: ['wide', 'full'],
    },

	edit: FuncionDeBloque,

	// La informacion pasa a travez de props
	// save: (props) => {

	// /* P1 Se Declaran los recursos que mostraremos */
	// 	const { attributes } = props;
	// 	const alignmentClass = (attributes.textAlignment != null) ? 'bg-info text-' + attributes.textAlignment : '';
	// 	const blockProps = useBlockProps.save( { className: alignmentClass } ); //no olvidar save.

	// /* P2 Se imprime el resultado */
	// 	const resultados = (
	// 		<div { ...blockProps }>
	// 			<p>{ attributes.exampleText }</p>
	// 			<p>{ attributes.postIds }</p>
	// 			<RichText.Content
	// 				tagName="h2"
	// 				value={attributes.myRichText}
	// 			/>
	// 			{ attributes.toggle && 
	// 				<div className="lasers">Toggle on</div>
	// 			}
	// 				<div className="animal"> {attributes.favoriteAnimal} </div>
	// 				<div className="color"> {attributes.favoriteColor} </div>
	// 			{ attributes.activateLasers && 
	// 				<div className="lasers">Lasers activados</div>
	// 			}
	// 		</div>
	// 	);
	// 	return resultados;
	// }

} );
