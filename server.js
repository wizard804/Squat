const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Dossier pour les fichiers statiques (images, css)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Stockage temporaire des messages (s'efface si on redémarre le serveur)
let messageHistory = [];

io.on('connection', (socket) => {
  console.log('✨ Un membre a rejoint le Squat');

  // Envoyer l'historique aux nouveaux arrivants
  socket.emit('load messages', messageHistory);

  socket.on('chat message', (data) => {
    const msgData = {
      user: data.user,
      text: data.text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      color: data.color
    };
    
    // On garde les 50 derniers messages en mémoire
    messageHistory.push(msgData);
    if (messageHistory.length > 50) messageHistory.shift();

    // Diffuser le message à tout le monde
    io.emit('chat message', msgData);
  });

  socket.on('disconnect', () => {
    console.log('❌ Un membre a quitté le Squat');
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`✅ Squat est en ligne !`);
  console.log(`Lien local : http://localhost:${PORT}`);
});
