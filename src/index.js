/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * T5 Prueba para incorporar controles:
 * Turorial: https://awhitepixel.com/blog/wordpress-gutenberg-create-custom-block-part-5-inspector/
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/inspector-controls/README.md
 */
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } from '@wordpress/components';


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'my-mockups/master-mockup', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Utilidades de bloque', 'master-mockup' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __( 'Descripcion opcional', 'master-mockup' ),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'carrot',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
    },

    // attributes: {
    //     content: {
    //         type: 'array',
    //         source: 'children',
    //         selector: 'p',
    //     },
    //     alignment: {
    //         type: 'string',
    //         default: 'none',
    //     },
    // },
    // example: {
    //     attributes: {
    //         content: 'Hello World',
    //         alignment: 'right',
    //     },
	// },

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,

	/**
	 * @see ./save.js
	 */
	// save,

	attributes: {
		// CUALQUIER INFORMACION QUE SE NECESITE GUARDAR SE ALOJA AQUI.
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
		// Ejercicio 3 RichText
		myRichText: {
			type: 'string',
			source: 'html',
			default: '', // sin dato pero declarado default.
			selector: 'h2', 
		},
		// Ejercicio 4, RichText diferente fuente
		myRichHeading: {
			type: 'string',
			source: 'html',
			selector: 'h3', 
		},
		/**
		 * Ejercicio 5 incorporar modificadores
		 */
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
		}
	},

	edit: (props) => { //props intercepta las propiedades declaradas del bloque

	/* P1 Se declara los recursos */

		// const inicializa la variable de la cual necesito datos.
		const { attributes } = props; // attributes, son los datos que requiero personalizar.

		// setAttributes es una funcion (similar en react: setState ),
		// que genera el cambio de estado en el atributo del cual quiero modificar el dato.
		const { setAttributes } = props;

		// se pueden declarar nuevas funciones en la edicion y al momneto de guardar.
		// -  Block Props son las herramientas, por lo que vi, es indispensable su uso (FORMATO DE BLOQUE).
		const blockProps = useBlockProps();


	/* P2 Se generan dinamicas, funciones etc.*/

		/**
		 * Ejemplo de editar los atributos al vuelo.
		 * - La primer carga mostrará otra informacion.
		 * - Al refrescar la pagina derá un error.
		 */
		// setAttributes({
		// 	exampleText: 'Hi',
		// 	postIds: 5
		// });

		// Prueba: Funcion para objeto 2
		function newObj2(newtext){
			return setAttributes( { exampleText: newtext } )
		};
	/* P3 Se imprime el resultado */

		// imprimir objeto Ej.1
		const resultados = (
			<div { ...blockProps }>
{/* prueba de controles */}

				<InspectorControls>
					{/**
					 * El panel de control de un bloque se agrega como modulo paralelo a su composicion.
					 * - probablemnte se pueda desarrollar en una funcion o archivo externo
					 * - sus valores se declaran y describen desde los atributos y se les asigna un nombre.
					 * - - la ejecucion aplica muy similar a la de los objetos en el bloque, solo que esto ocurre en el panel.
					 */}
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
							{/** Revisar setState en colorpicker
							  * https://developer.wordpress.org/block-editor/components/color-picker/
							  * https://wordpress.stackexchange.com/questions/324979/getting-a-custom-gutenberg-components-state-from-outside-that-component 
							  * setState
							  * https://developer.wordpress.org/block-editor/packages/packages-compose/
							  */}
							<ColorPicker
								color={attributes.favoriteColor}
								// la docuentacion cambia el metodo y se debe hacer una prueba despues.
								// onChangeComplete={ ( value ) => setState( value.hex ) }
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

{/* fin prueba de controles */}
				<p>{'EDIT Objeto 1, sin formato'}</p>
					<p>{ attributes.exampleText }</p>
					<p>{ attributes.postIds }</p>
				<p>{'EDIT Objeto 2, input'}</p>
					<TextControl
						value={attributes.exampleText}
						// ejercicio, funcion externa.
						onChange={ newObj2 }
					/>
				<p>{'EDIT Objeto 3, richtext'}</p>
					<RichText
						// dar formato al item
						tagName="h2"
						value={attributes.myRichText}
						onChange={ ( myRichText ) => setAttributes( { myRichText } ) }
						// indicacion auxiliar
						placeholder={ __( 'Escribele aqui h2 (c/traduccion)...' ) }
					/>
				<p>{'EDIT Objeto 4, richtext diferente fuente'}</p>
					<RichText
						tagName="h3"
						value={attributes.myRichHeading}
						onChange={ ( myRichHeading ) => setAttributes( { myRichHeading } ) }
						placeholder={ __( 'Escribele aqui h3 (c/traduccion)...' ) }
					/>
				{/* Ejercicio 5 ver datos del panel*/}
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

	},

/**
 * Llamar la informacion que se ha guardado en nuestro objeto
 * La dinamica de bloques en wp implica 2 esfuerzos. 
 * - La construccion de interfaz que almacenará la informacion en edicion.
 * - La extraccion de la informacion almacenada en la edicion desde frontend.
 * 
 * Fin tutorial p4.
 * Observaciones: 
 * Es importante setear el bloque con:
 * - useBlockProps, propiedades de edicion de bloque.
 * - verificar que existe un selector de etiquetas (tagname) desde los attributes.
 * - ocupar el save().
 * 
 * Fin tutorial p5.
 * Los controles, se importan como todas las librerias que se ocupan.
 * se declara el cambio y se guarda, se debe tener especial cuidado con la nomenclatura para guardar los estados, 
 * dependerá del control que se ocupa.
 */

	// save: () => {
	// 	return <div>:)</div>
	// }

	// La informacion pasa a travez de props
	save: (props) => {

	/* P1 Se Declaran los recursos que mostraremos */

		// se declara que se hará uso de attributes para manipular la info.
		const { attributes } = props;

		// -  Block Props son las herramientas.
		// - - NOTA! se debe espicificar que la funcion save, para inicializar correctamente el bloque.
		const blockProps = useBlockProps.save();

	/* P2 Se imprime el resultado */

		// y en la visualizacion el atributo modificado o no, se representara de acuerdo al objeto que lo decida.

		// imprimir objeto Ej.1
		const resultados = (
			<div { ...blockProps }>
				<p>{'SAVE Objeto 1, sin formato'}</p>
					<p>{ attributes.exampleText }</p>
					<p>{ attributes.postIds }</p>
				<p>{'EDIT Objeto 2, de input'}</p>
					<p>{ attributes.exampleText }</p>
				<p>{'EDIT Objeto 3, de rich text'}</p>
					<RichText.Content
						//formato
						tagName="h2"
						value={attributes.myRichText}
					/>
				<p>{'EDIT Objeto 4, richtext diferente fuente'}</p>
				{/* No olvidar content, arroja error */}
					<RichText.Content
						tagName="h3"
						value={attributes.myRichHeading}
					/>
				{/* Ejercicio 5 ver datos del panel*/}
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

} );