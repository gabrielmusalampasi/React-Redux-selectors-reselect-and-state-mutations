module.exports = function(expressServer){
    expressServer.get('/', (req,res) => {
        res.send({ hello: 'world' });
    });
};

