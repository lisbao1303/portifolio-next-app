"use client"
import { useState } from "react";

export default function Vbatoxml() {
  const [vbaCode, setVbaCode] = useState("");
  const [xmlOutput, setXmlOutput] = useState("");

  const extractFieldsFromVBA = (vba: string) => {
    const fieldRegex = /Call\s+fgIncluiXML\(aryXML,\s*"(.*?)"\s*,\s*"(.*?)"/g;
    let match;
    let fields = "";

    while ((match = fieldRegex.exec(vba)) !== null) {
      const fieldName = match[1];
      const fieldValue = match[2];
      fields += `      <field id="${fieldName}" value="${fieldValue}"/>
`;
    }

    return fields;
  };

  const generateXML = () => {
    const extractedFields = extractFieldsFromVBA(vbaCode);
    const xmlTemplate = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<requestMsg>
  <dse_operationName>GC42</dse_operationName>
  <dse_formattedData>
    <kColl id="entryData">
${extractedFields}    </kColl>
  </dse_formattedData>
  <dse_processParameters>dse_operationName</dse_processParameters>
</requestMsg>`;
    setXmlOutput(xmlTemplate);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <textarea
        className="border p-2 w-full h-40"
        placeholder="Cole seu código VBA aqui"
        value={vbaCode}
        onChange={(e) => setVbaCode(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={generateXML}
      >
        Gerar XML
      </button>
      <textarea
        className="border p-2 w-full h-40"
        placeholder="XML Gerado"
        value={xmlOutput}
        readOnly
      />
    </div>
  );
}
