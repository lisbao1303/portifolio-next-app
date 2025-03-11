"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Vbatoxml() {
  const [vbaCode, setVbaCode] = useState("");
  const [xmlOutput, setXmlOutput] = useState("");

  const extractFunctionsFromVBA = (vba: string) => {
    const functionRegex = /(Sub|Function)\s+(\w+GC[A-Za-z\d]{2})\([^)]*\)/g;
    let match;
    let functions: string[] = [];

    while ((match = functionRegex.exec(vba)) !== null) {
      functions.push(match[2]);
    }
    console.log(functions)

    return functions;
  };


  const extractFieldsFromVBA = (vba: string, functionName: string) => {

    // Regex para capturar o bloco da função VBA
    const functionBlockRegex = new RegExp(
      `(Sub|Function)\\s+${functionName}\\([^)]*\\)[\\s\\S]*?End\\s+(Sub|Function)`,
      "g"
    );

    // Regex para capturar os campos fgIncluiXML
    const regex = /fgIncluiXML\(\s*([^,]+),\s*([^,]+?)\s*,\s*([^,]+?)\s*,\s*"([^"]*)",\s*"([^"]+)"\s*\)/g
    
    // Encontra o bloco da função
    const matchFunctionBlock = functionBlockRegex.exec(vba);
    if (!matchFunctionBlock) return "";

    // Extrai o conteúdo do bloco da função
    const functionBlock = matchFunctionBlock[0];

    // Variável para armazenar os campos extraídos
    let fields = "";

    // Itera sobre todas as correspondências de fgIncluiXML
    let match;
    while ((match = regex.exec(functionBlock)) !== null) {
      console.log(match)
        const fieldName = match[2]; // Nome do campo
        const fieldValue = match[3]; // Valor do campo
        fields += `      <field id=${fieldName} value=${fieldValue}/>\n`;
    }

    console.log(fields)

    return fields;
};

  const generateXML = () => {
    const functions = extractFunctionsFromVBA(vbaCode);
    let xmlTemplates = "";

    functions.forEach((func) => {
      const operationName = "GC" + func.slice(-2);
      const extractedFields = extractFieldsFromVBA(vbaCode, func);
      const xmlTemplate = `<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>
<requestMsg>
  <dse_operationName>${operationName}</dse_operationName>
  <dse_formattedData>
    <kColl id=\"entryData\">
${extractedFields}    </kColl>
  </dse_formattedData>
  <dse_processParameters>dse_operationName</dse_processParameters>
</requestMsg>

`;
      xmlTemplates += xmlTemplate;
    });

    setXmlOutput(xmlTemplates);
  };


  return (
    <div className={styles.container}>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          placeholder="Cole seu código VBA aqui"
          value={vbaCode}
          onChange={(e) => setVbaCode(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="XML Gerado"
          value={xmlOutput}
          readOnly
        />
      </div>
      <button className={styles.button} onClick={generateXML}>Gerar XML</button>
    </div>
  );
}
