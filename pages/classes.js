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
      Estos son los formatos de talleres y clases que ofrecemos por el momento
      <PlanSearchBar plans={pricingData} setFilteredPlans={setFilteredPlans} />
      <PricingGrid plans={filteredPlans} />
    </Layout>
  );
}