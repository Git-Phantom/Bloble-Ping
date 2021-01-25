<?php

function autoload($class) {
    $dirBase = DIR_APP . DS;
    $class = $dirBase . 'Class' . DS . str_replace( '\\', DS, $class) . '.php';

    if(file_exists($class) && !is_dir($class)) {
        include $class;
    }
}

$ps_autoload_register( 'autoload');