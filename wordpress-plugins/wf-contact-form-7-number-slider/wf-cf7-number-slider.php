<?php 
/*
Plugin Name: Webbed Feet Contact Form 7 Number Slider
Plugin URI:
Description: This plugin is an add-on plugin for Contact Form 7. It adds a special number slider filed for the form so you can add price range, age range and more to your contact form. Improve user experience.
Version:1.0
Author: Webbed Feet
Author URI: http://webbedfeetpro.com/
License: GPLv2

*/
if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }

if(!class_exists('wf_cf7_number_slider')){

  class wf_cf7_number_slider{
    //Set plugin version
    const VERSION ='1.0';
    
    //instance
    private static $instance;
    
    //constructor
    public function __construct(){
      //Check if contact form 7 is active
      if(class_exists('WPCF7')){
        if(WPCF7_VERSION < 4.6){
          deactivate_plugins( plugin_basename( __FILE__ ) );
        add_action('admin_notices',array($this, 'update_cf7'));
       
          }else{                          //Miss CF7 installed - show notice
            require 'includes/slider.php';
					require 'includes/slider-range.php';

        
      }
    }else{
        
     
         add_action('admin_notices',array($this, 'cf7_missing_notice'));
         
      }
      
    }// End of constructor
    
    public static function get_instance(){
      if(!isset(self::$instance)){
        self::$instance = new self();
      }
      return self::$instance;
    }  //End of function get_instance
    
    public function cf7_missing_notice(){
     	echo '<div class="error"><p>' . sprintf( __( '"Hola!! Looks like %s is not actived yet!"', ' wf_cf7_number_slider' ), '<a href="https://wordpress.org/plugins/contact-form-7/" target="_blank">' . __( 'Contact Form 7', ' wf_cf7_number_slider' ) . '</a>' ) . '</p></div>';
			
    }// End of cf7_missing_notice
    
    
    public function update_cf7(){
 
      		echo '<div class="error"><p>' . sprintf( __( '"Hola!! Looks like your current version of Contact form is  %s !" Please upgrade %s to 4.6 or above ', ' wf_cf7_number_slider' ), WPCF7_VERSION, '<a href="https://wordpress.org/plugins/contact-form-7/" target="_blank">' . __( 'Contact Form 7', ' wf_cf7_number_slider' ) . '</a>' ) . '</p></div>';
			
    }
    
    

   
    
    
   public function wf_cf7_number_slider_deactivate(){
 

}// End of deactivation

  } //End of Class wf_cf7_number_slider
} // End of if class_exists('wf_cf7_number_slider







add_action( 'plugins_loaded', array( 'wf_cf7_number_slider', 'get_instance' ) );  
add_action( 'plugins_loaded', array( 'wf_slider', 'get_instance' ) );  

?>
