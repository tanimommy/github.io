<?php

class contactfree extends WidgetHandler 
{
	function proc($args) {
		Context::loadLang($this->widget_path."lang");

		// default value
		if (!$args->reload) $args->reload = 'N';
		$widget_info->reload_url = $args->reload_url;
		
		Context::set('widget_info', $args);
		Context::set('rand_password', rand(10000, 99999));

		// 템플릿 컴파일
		$tpl_path = sprintf('%sskins/%s', $this->widget_path, $args->skin);
		$tpl_file = 'contact';

		$oTemplate = &TemplateHandler::getInstance();
		return $oTemplate->compile($tpl_path, $tpl_file);
	}
}
?>
