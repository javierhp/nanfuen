import Layout from "../components/layout";
import pricingData from '../public/data/classes-pricing.json';
import PricingGrid from '../components/planPricingGrid';
import PlanSearchBar from "../components/planSearchBar";
import React, { useState } from 'react';

export default function Classes() {
  const plans = pricingData;
  const [filteredPlans, setFilteredPlans] = useState(pricingData);
  return (
    <Layout>
      <p>Estos son los formatos de talleres y clases que ofrecemos por el momento</p>
      <p>Para gente en Argentina: tomamos la cotizacion 'Blue' del dolar, el mismo se puede encontrar <a href="https://www.dolarito.ar/" target="_blank">aqui</a> </p>
      <PlanSearchBar plans={pricingData} setFilteredPlans={setFilteredPlans} />
      <p></p>
      <PricingGrid plans={filteredPlans} />
    </Layout>
  );
}