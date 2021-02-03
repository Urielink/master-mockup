<?php
/**
 * Plugin Name:     Utilidades de bloque
 * Description:     Descripcion opcional (mastermockup)
 * Version:         0.1.0
 * Author:          Uri Lazcano
 * License:         GPL-2.0-or-later
 * License URI:     http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:     master-mockup
 *
 * @package         my-mockups
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function my_mockups_master_mockup_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "my-mockups/master-mockup" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'my-mockups-master-mockup-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'my-mockups-master-mockup-block-editor', 'master-mockup' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'my-mockups-master-mockup-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'my-mockups-master-mockup-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'my-mockups/master-mockup', array(
		'editor_script' => 'my-mockups-master-mockup-block-editor',
		'editor_style'  => 'my-mockups-master-mockup-block-editor',
		'style'         => 'my-mockups-master-mockup-block',
		// T8 PHP render P5/P1.
		// Se agrega un callback y parametros
		'render_callback' => 'awp_myfirstblock_render',
		// Se agreagn los atributos para el renderizado.
		'attributes' => [
			'exampleText' => [
				'type' => 'string'
			],
			'postIds' => [
				'type' => 'array'
			],
			'textAlignment' => [
				'type' => 'string',
			],
			'myRichText' => [
				'type' => 'string',
			],
			'toggle' => [
				'type' => 'boolean',
				'default' => true
			],
			'favoriteAnimal' => [
				'type' => 'string',
				'default' => 'dogs'
			],
			'favoriteColor' => [
				'type' => 'string',
				'default' => '#DDDDDD'
			],
			'activateLasers' => [
				'type' => 'boolean',
				'default' => false
			],
			// atributo del control.
			'selectedPostId' => [
				'type' => 'number',
				'default' => 0
			],
		]


	) );
}
add_action( 'init', 'my_mockups_master_mockup_block_init' );

/**
 * T8 PHP render P6/2)
 * Se pasan los argumentos, justo como en el customizador.
 */
function awp_myfirstblock_render($attr, $content) {
	// return the block's output here
	// return '<div>'.$attr['favoriteColor'].'</div>';

	$str = '';
	if ($attr['selectedPostId'] > 0) {
		$post = get_post($attr['selectedPostId']);
		if (!$post) {
			return $str;
		}
		$str = '<div class="awp-myfirstblock">';
		$str .= '<a href="' . get_the_permalink($post) . '">';
		$str .= '<h3>' . get_the_title($post) . '</h3>';
		$str .= '</a>';
		$str .= '<div>'.$attr['favoriteColor'].'</div>';
		$str .= '</div>';
	}
	return $str;

}