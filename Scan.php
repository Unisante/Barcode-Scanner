<?php

namespace Unisante\Scan;

use Redcap;


class Scan extends \ExternalModules\AbstractExternalModule
{
    function redcap_data_entry_form($project_id, $record, $instrument, $event_id, $group_id, $repeat_instance)
    {
        return $this->injectQuagga($instrument);
    }

    function redcap_survey_page($project_id, $record, $instrument, $event_id, $group_id, $repeat_instance)
    {
        return $this->injectQuagga($instrument);
    }

    function injectQuagga($instrument)
    {

        $em_fields = $this->getProjectSetting('scannable-field-list');
        $barcode = $this->getProjectSetting('barcode');
        $is_survey = $this->getProjectSetting('is-survey');
        $instrument_fields = REDCap::getFieldNames($instrument);

        // No corresponding field on the current page (data entry/survey)
        // No need to inject
        if (count(array_intersect($em_fields, $instrument_fields)) === 0) {
            return $this->exitAfterHook();
        }

        if ($this->isSurveyPage()) {
            foreach ($em_fields as $key => $value) {
                // We remove the non enabled survey fields
                if ($is_survey[$key] === false) {
                    unset($em_fields[$key]);
                }
            }
            // No corresponding field on the current survey page
            if (count(array_intersect($em_fields, $instrument_fields)) === 0) {
                return $this->exitAfterHook();
            }
        }

        echo '<script src="' . $this->getUrl("quagga.js") . '"></script>';
        echo '<script src="' . $this->getUrl("qrcode.js") . '"></script>';
        echo "<script type='text/JavaScript'>";

        foreach ($em_fields as $key => $value) {
            echo "$('input[name=" . $value . "]').after('<input type=\"button\" onclick=" . "redQuagga.start(\"" . $value . "\",\"" . $barcode[$key] . "\")" . " id=" . $value . "-button" . " value=\"Scan\" /><input style=\"display:none;\" type=\"button\" onclick=" . "redQuagga.stop()" . " id=" . $value . "-button-stop" . " value=\"Stop\" /><div id=" . $value . "-container" . "></div>');";
        }
        print '</script>';

        return $this->exitAfterHook();
    }
}
