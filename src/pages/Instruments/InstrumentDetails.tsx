import { useParams } from "react-router-dom";
import useInstrument from "../../hooks/useInstrument";
import InstrumentDetailsCard from "./InstrumentDetailsCard";

const InstrumentDetails = () => {
  const { id } = useParams();
  const { instrument, isLoading, error } = useInstrument(id || "");
  return (
    <div className="container mx-auto flex justify-center min-h-screen pt-5 pb-3">
      {instrument && <InstrumentDetailsCard instrument={instrument} />}
    </div>
  );
};

export default InstrumentDetails;
