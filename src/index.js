/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
// T7 Clase de modulo, se definirá la funcion de edicion de bloque
import { Component } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker, ToolbarGroup, ToolbarButton } from '@wordpress/components';

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
	class funcionDeBloque extends Component {
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
 */

// function funcionDeBloque(props){
class funcionDeBloque extends Component{

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
							label="What's your favorite animal?"
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
					<ToolbarButton 
						icon="smiley" 
						label="Sonrie"
						onClick={() => console.log('sonrie')}
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	}

	render() {
	/* P1 Se declara los recursos */
	const { attributes, setAttributes } = this.props;
		// const alignmentClass = (attributes.textAlignment != null) ? 'bg-warning text-' + attributes.textAlignment : '';
		// 	const blockProps = useBlockProps( { className: alignmentClass } );

	/* P2 Se generan dinamicas, funciones etc.*/
	/* P3 Se imprime el resultado */
		const resultados = (
			// <div { ...blockProps }>
			<div>

				{ this.getInspectorControls() }

				{ this.getBlockControls() }

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

			</div>
		);
		return resultados;
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
		}
	},
	supports: {
		html: false,
		//toolbar
		align: ['wide', 'full'],
    },

	edit: funcionDeBloque,

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
