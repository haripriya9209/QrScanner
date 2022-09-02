import React, { useRef, useState, useCallback } from "react";
import { useReactToPrint } from 'react-to-print';
import ListItem from './ListItem';
import { ComponentToPrint } from './ComponentToPrint';

export default function PrintComponent({items, template, setItems}) {
  let componentRef = useRef();
  const onBeforeGetContentResolve = useRef(null);
  const [selectedItem, setSelectedItem] = useState({})
  const [loading, setLoading] = useState(false);

  const handleOnBeforeGetContent = useCallback(() => {
    setLoading(true);

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    });
  }, [setLoading]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: handleOnBeforeGetContent,
    removeAfterPrint: true
  });

  return (
    <>
      <div className="print-container">
      <ListItem loading={loading} items={items} setSelectedItem={setSelectedItem} handlePrint={handlePrint} setItems={setItems}/>
        <div style={{display: "none"}}>
          <ComponentToPrint selectedItem={selectedItem} ref={componentRef} template={template} />
        </div>
      </div>
    </>
  );
}