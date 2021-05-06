const API_URL = 'http://152.67.33.12:3232'; // PROD
const API_WS_URL = 'ws://152.67.33.12:3232/ws'; // PROD

const DEFAULT_HEADERS = {
  Accept: 'application/json',
};

export const getAllAvailableRooms = async () => {
  try {
    const uri = `${API_URL}/room/all`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    if (response.status < 400) {
      const rooms = await response.json();
      return rooms;
    } else {
      console.log('Status < 400 ao buscar todas as salas na API.');
      console.log(response.status, ' ', response.statusText);
      throw new Error('Houve um erro ao acessar a API');
    }
  } catch (error) {
    console.log('Erro ao buscar todas as salas na API:');
    console.log(error);
    throw new Error('Houve um erro ao acessar a API.');
  }
};

export const getRoomByName = async (roomName: string) => {
  try {
    const uri = `${API_URL}/room/name/${roomName}`;
    const response = await fetch(uri, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    if (response.status < 400) {
      const room = await response.json();
      return room;
    } else {
      console.log('Status < 400 ao buscar uma sala por nome na API.');
      console.log(response.status, ' ', response.statusText);
      throw new Error('Houve um erro ao acessar a API');
    }
  } catch (error) {
    console.log('Erro ao buscar uma sala por nome na API:');
    console.log(error);
    throw new Error('Houve um erro ao acessar a API.');
  }
};

export const getWebSocket = () => {
  const uri = `${API_WS_URL}`;
  return new WebSocket(uri);
};
