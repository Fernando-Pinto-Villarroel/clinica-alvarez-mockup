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

export default function ServiceFormRouter({ serviceType, ...props }) {
  const FormComponent = formMap[serviceType] || null;
  return FormComponent ? <FormComponent {...props} /> : <div>Seleccione un tipo de servicio válido.</div>;
}