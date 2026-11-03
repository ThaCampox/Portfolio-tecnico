<#
.SYNOPSIS
    Lista dispositivos USB e HID presentes e destaca os que reportam problema.
.DESCRIPTION
    Usa o Plug and Play do Windows (Get-PnpDevice). Somente leitura: não altera o sistema.
    Documentação relacionada: DOC-SUP-001.
.EXAMPLE
    .\Get-UsbHidStatus.ps1 | Format-Table -AutoSize
#>
[CmdletBinding()]
param()

$devices = Get-PnpDevice -Class USB, HIDClass -PresentOnly -ErrorAction Stop

foreach ($d in $devices) {
    $code = (Get-PnpDeviceProperty -InstanceId $d.InstanceId -KeyName 'DEVPKEY_Device_ProblemCode' -ErrorAction SilentlyContinue).Data
    [pscustomobject]@{
        Status       = $d.Status
        Class        = $d.Class
        FriendlyName = $d.FriendlyName
        ProblemCode  = $code
        InstanceId   = $d.InstanceId
    }
} | Sort-Object Status, Class, FriendlyName
