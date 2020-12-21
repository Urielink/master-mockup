/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Ejercicio 1 a 4 incorporar campos en un solo bloque.
 * Asignar, modificar y guardar atributos.
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';



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

	/**
	 * @see ./edit.js
	 */
	// edit: Edit,

	/**
	 * @see ./save.js
	 */
	// save,

	attributes: {
		// Ejercicio 3 RichText
		myRichText: {
			type: 'string',
			source: 'html',
			selector: 'h2', // se debe coordinar el uso de selectores.
			default: 'mi dato por default' // esta propiedad es auxiliar.
		},
	},

	edit: (props) => { //props intercepta las propiedades declaradas del bloque

	/* P1 Se declara los recursos */

		// const inicializa la variable de la cual necesito datos.
		// - attributes, son los datos que requiero personalizar.
		// - setAttributes es una funcion (similar en react: setState ),
		// - - que genera el cambio de estado en el atributo del cual quiero modificar el dato.
		const { attributes, setAttributes } = props;

		// se pueden declarar nuevas funciones en la edicion y al momneto de guardar.
		// -  Block Props son las herramientas.
		const blockProps = useBlockProps();

	/* P2 Se generan dinamicas, funciones etc.*/

	/* P3 Se imprime el resultado */

		const resultados = (
			// Puedes ocupar objetos para envolver el campo, 
			// - desde mi punto de vista, no seria necesario.
			// - - quizá se puede personalizar el contenedor con más cosas.
			<div>
				<p>{'EDIT Objeto 3, richtext'}</p>
					<RichText
						// formato de bloque
						{ ...blockProps }
						// dar formato al item
						tagName="h2"
						value={attributes.myRichText}
						// onChange={ (newrichtext) => setAttributes({ myRichText: newrichtext }) }
						// es mas simple modificar la funcion.
						onChange={ ( myRichText ) => setAttributes( { myRichText } ) }
						// indicacion auxiliar
						placeholder={ __( 'Escribele aqui papa (c/traduccion)...' ) }
					/>
			</div>);

		return resultados;

	},

/**
 * Llamar la informacion que se ha guardado en nuestro objeto
 * La dinamica de bloques en wp implica 2 esfuerzos. 
 * - La construccion de interfaz que almacenará la informacion en edicion.
 * - La extraccion de la informacion almacenada en la edicion desde frontend.
 */

	// La informacion pasa a travez de props
	save: (props) => {

	/* P1 Se Declaran los recursos que mostraremos */

		// se declara que se hará uso de attributes para manipular la info.
		const { attributes } = props;
		// se pueden declarar nuevas funciones en la edicion y al momneto de guardar.
		// -  Block Props son las herramientas.
		// - - NOTA! se debe espicificar que la .
		const blockProps = useBlockProps.save();

	/* P2 Se imprime el resultado */

		// y en la visualizacion el atributo modificado o no, se representara de acuerdo al objeto que lo decida.

		const resultados = (
			<div>
				<p>{'SAVE Objeto 3, de rich text'}</p>
					<RichText.Content
						// formato bloque
						{ ...blockProps }
						//formato
						tagName="h2"
						value={attributes.myRichText}
					/>
			</div>
		);

		return resultados;

	}

} );
