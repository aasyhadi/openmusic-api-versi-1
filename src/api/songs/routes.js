const routes = (handler) => [
    {
        method: 'POST',
        path: '/songs',
        handler: handler.postSongHandler, // postSongHandler hanya menerima dan menyimpan "satu" song.
    },
    {
        method: 'GET',
        path: '/songs',
        handler: handler.getSongsHandler, // getSongsHandler mengembalikan "banyak" song.
    },
    {
        method: 'GET',
        path: '/songs/{songId}',
        handler: handler.getSongByIdHandler, // getSongByIdHandler mengembalikan "satu" song.
    },
    {
        method: 'PUT',
        path: '/songs/{songId}',
        handler: handler.putSongByIdHandler, // putSongByIdHandler hanya menerima dan mengubah "satu" song.
    },
    {
        method: 'DELETE',
        path: '/songs/{songId}',
        handler: handler.deleteSongByIdHandler, // deleteSongByIdHandler menghapus "satu" song.
    },
];

module.exports = routes;