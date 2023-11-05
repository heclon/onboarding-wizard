import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import { CustomerService } from "../../service/CustomerService.js";

export default function EntityTable({ customers, loading }) {
  // const [customers, setCustomers] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const [selectedEntity, setSelectedEntity] = useState(null);
  const [metaKey, setMetaKey] = useState(true);

  useEffect(() => {
    // CustomerService.getCustomersSmall().then((data) => {
    //   setCustomers(getCustomers(data));
    //   setLoading(false);
    // });
    initFilters();
  }, []);

  // const getCustomers = (data) => {
  //   return [...(data || [])].map((d) => {
  //     d.date = new Date(d.date);
  //
  //     return d;
  //   });
  // };

  const clearFilter = () => {
    initFilters();
  };

  const createNewProfile = () => {
    console.log(
      "Show Step 3 create new profile BUT FIRST MOVE STEP 2 TO ITS OWN ROUTE",
    );
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  const renderHeader = () => {
    return (
      <>
        <div className="justify-content-between txt-sm flex flex-wrap gap-2">
          <Button
            type="button"
            className="p-button-info flex-wrap"
            icon="pi pi-user"
            label="Create New Profile"
            onClick={createNewProfile}
          />
          <div className="md:justify-content-end flex flex-wrap gap-2">
            <div className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Keyword Search"
              />
            </div>
            <div>
              <Button
                type="button"
                label="Clear"
                outlined
                onClick={clearFilter}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const header = renderHeader();

  return (
    <div className="py-3">
      <DataTable
        value={customers}
        className="text-md"
        paginator
        showGridlines
        selectionMode="single"
        selection={selectedEntity}
        onSelectionChange={(e) => setSelectedEntity(e.value)}
        metaKeySelection={metaKey}
        rows={5}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={[
          "name",
          "country.name",
          "representative.name",
          "balance",
          "status",
        ]}
        header={header}
        emptyMessage="No profiles found."
      >
        <Column field="name" header="Name" />
      </DataTable>
    </div>
  );
}
