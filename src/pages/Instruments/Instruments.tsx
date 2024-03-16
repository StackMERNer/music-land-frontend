import { useEffect, useState } from "react";
import InstrumentCard from "../../components/InstrumentCard/InstrumentCard";
import useInstruments, { InstrumentQuery } from "../../hooks/useInstruments";
import { useLocation } from "react-router-dom";

const Instruments = () => {
  // const queryParams = new URLSearchParams(location.search);
  const { state } = useLocation();

  const [instrumentQuery, setInstrumentQuery] = useState({} as InstrumentQuery);

  const { instruments, isLoading } = useInstruments(instrumentQuery);

  useEffect(() => {
    setInstrumentQuery({
      ...state,
    } as unknown as InstrumentQuery);
  }, [state]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container mx-auto p-5 min-h-screen">
    
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {instruments.map((instrument, index) => (
          <InstrumentCard instrumentObj={instrument} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Instruments;
