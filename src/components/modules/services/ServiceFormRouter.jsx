import XRayForm from "./forms/XRayForm";
import CTScanForm from "./forms/CTScanForm";
import UltrasoundForm from "./forms/UltrasoundForm";
import LabForm from "./forms/LabForm";
import ECGForm from "./forms/ECGForm";
import MammographyForm from "./forms/MammographyForm";

const formMap = {
  rayos_x: XRayForm,
  tomografia: CTScanForm,
  ecografia: UltrasoundForm,
  laboratorio: LabForm,
  ecg: ECGForm,
  mamografia: MammographyForm,
};

export default function ServiceFormRouter({ serviceType, serviceToEdit, ...props }) {
  const type = serviceType || serviceToEdit?.serviceType;
  const FormComponent = formMap[type] || null;
  return FormComponent ? (
    <FormComponent serviceToEdit={serviceToEdit} {...props} />
  ) : (
    <div>Seleccione un tipo de servicio válido.</div>
  );
}