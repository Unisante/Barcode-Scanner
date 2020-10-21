<?php

namespace Unisante\Scan;


class Scan extends \ExternalModules\AbstractExternalModule
{
  function redcap_data_entry_form($project_id, $record, $instrument, $event_id, $group_id, $repeat_instance)
  {

    $fields = $this->getProjectSetting('scannable-field-list');
    $barcode = $this->getProjectSetting('barcode');

    echo '<script src="' . $this->getUrl("quagga.js") . '"></script>';
    echo '<script src="' . $this->getUrl("qrcode.js") . '"></script>';
    echo "<script type='text/JavaScript'>";


    foreach ($fields as $key => $value) {
      echo "$('input[name=" . $value . "]').after('<input type=\"button\" onclick=" . "redQuagga.start(\"" . $value . "\",\"" . $barcode[$key] . "\")" . " id=" . $value . "-button" . " value=\"Scan\" /><input style=\"display:none;\" type=\"button\" onclick=" . "redQuagga.stop()" . " id=" . $value . "-button-stop" . " value=\"Stop\" /><div id=" . $value . "-container" . "></div>');";
    }
    print '</script>';
  }
}
