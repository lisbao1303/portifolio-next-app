// app/api/data/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Caminho para o arquivo JSON no projeto
    const filePath = path.resolve('data','educations.json');

    console.log(filePath)
    
    // Lê o arquivo JSON
    const fileData = fs.readFileSync(filePath, 'utf-8');

    // Converte o JSON para um objeto
    const data = JSON.parse(fileData);

    // Retorna os dados no formato JSON
    return NextResponse.json(data);
  } catch (error) {
    // Em caso de erro, retorna uma mensagem de erro
    return NextResponse.json({ error: 'Failed to read JSON file' }, { status: 500 });
  }
}
