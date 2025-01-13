import axios from 'axios';
import config from '../../config.json';


export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

/*export const getQuote = async () => {
  const { data } = await axios.get('https://api.api-ninjas.com/v1/quotes');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};*/

interface QuoteResponse {
  quote: string;
  author: string;
  category: string;
}

export const getQuote = async (): Promise<{ quote: string }> => {
  try {
    const API_KEY = 'SmUmWqqaIneCOCIWFkP6Mg==GV9xniy6ETjMiLak'; // Ensure this is correctly formatted

    // Send GET request using axios
    const { data } = await axios.get<QuoteResponse[]>('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': API_KEY, // Correct header formatting
      },
    });

    // Log the full response to inspect the structure
    console.log('API Response:', data);

    // Check if the response is valid and contains quotes
    if (data.length === 0 || !data[0].quote || !data[0].author) {
      throw new Error('Invalid data received from API');
    }

    // Return the quote in the desired format
    return {
      quote: `“${data[0].quote}” — ${data[0].author}`,
    };
  } catch (error: any) {
    // Log more detailed error information
    if (error.response) {
      console.error('API Error:', error.response.data);
      console.error('API Status:', error.response.status);
      console.error('API Headers:', error.response.headers);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error during request setup:', error.message);
    }

    // Re-throw the error with the detailed message
    throw new Error(`Failed to fetch quote: ${error.message}`);
  }
};