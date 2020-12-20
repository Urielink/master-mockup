/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

import { RichText } from '@wordpress/block-editor';
import { TextControl, TextareaControl } from '@wordpress/components';

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
			default: 'mi texto'
		},
		postIds: {
			type: 'array',
			default: [1,2,3,4]
		},
		// Ejercicio 3 RichText
		myRichText: {
			type: 'string',
			source: 'html',
			default: ''
		},
		// Ejercicio 4, RichText diferente fuente
		myRichHeading: {
			type: 'string',
			source: 'html',
		},
	},

	edit: (props) => { //props intercepta las propiedades declaradas del bloque

	/* P1 Se declara los recursos */

		// const inicializa la variable de la cual necesito datos.
		const { attributes } = props; // attributes, son los datos que requiero personalizar.

		// setAttributes es una funcion (similar en react: setState ),
		// que genera el cambio de estado en el atributo del cual quiero modificar el dato.
		const { setAttributes } = props;

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
		const resultados =
			<div>
				<p>{'EDIT Objeto 1, sin formato'}</p>
					<p>{ attributes.exampleText }</p>
					<p>{ attributes.postIds }</p>
				<p>{'EDIT Objeto 2, input'}</p>
					<TextControl
						value={attributes.exampleText}
						// onChange={ (newtext) => setAttributes( { exampleText: newtext } ) }
						// ejercicio, funcion externa.
						onChange={ newObj2 }
					/>
				<p>{'EDIT Objeto 3, richtext'}</p>
					<RichText
						// dar formato al item
						tagName="h2"
						// indicacion auxiliar
						placeholder="Escribele aqui papa"
						value={attributes.myRichText}
						onChange={ (newrichtext) => setAttributes({ myRichText: newrichtext }) }
					/>
				<p>{'EDIT Objeto 4, richtext diferente fuente'}</p>
					<RichText
						tagName="h3"
						placeholder="Otra fuente"
						value={attributes.myRichHeading}
						onChange={(newtext) => setAttributes({ myRichHeading: newtext })}
					/>


			</div>;

		return resultados;

	},

/**
 * Llamar la informacion que se ha guardado en nuestro objeto
 * La dinamica de bloques en wp implica 2 esfuerzos. 
 * - La construccion de interfaz que almacenará la informacion en edicion.
 * - La extraccion de la informacion almacenada en la edicion desde frontend.
 */

	// save: () => {
	// 	return <div>:)</div>
	// }

	// La informacion pasa a travez de props
	save: (props) => {

	/* P1 Se Declaran los recursos que mostraremos */

		// se declara que se hará uso de attributes para manipular la info.
		const { attributes } = props;

	/* P2 Se imprime el resultado */

		// y en la visualizacion el atributo modificado o no, se representara de acuerdo al objeto que lo decida.

		// imprimir objeto Ej.1
		const resultados =
			<div>
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
			</div>;

		return resultados;

	}

} );
