import axios from "axios";
import { Config } from "../config/config";

export async function verifynin(nin: string) {
    const url = 'https://api.prembly.com/verification/vnin-basic'; // Replace with your API endpoint
  
    const requestData = {
      number: nin,
    };
  
    const headers = {
      'x-api-key': Config.premblySecretKey,
      app_id: Config.premblyAppID
    };
  
    try {
      const response = await axios.post(url, requestData, { headers });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function verifycac(rc_number: string| null, company_name: string, company_type: string) {
  const url = 'https://api.prembly.com/identitypass/verification/cac'; // Replace with your API endpoint

  const requestData = {
    rc_number,
    company_name,
    company_type
  };

  const headers = {
    'x-api-key': Config.premblySecretKey,
    app_id: Config.premblyAppID
  };

  try {
    const response = await axios.post(url, requestData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}