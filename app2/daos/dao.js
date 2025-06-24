const daoCommon = require('./common/daocommon')



const bookDao ={
    ...daoCommon,
    ...require('../daos/api/bookDao')
}

const authorDao ={
    ...daoCommon,
    ...require('../daos/api/authorDao')
}

const formatDao ={
    ...daoCommon,
    ...require('../daos/api/formatDao')
}

const genreDao ={
    ...daoCommon,
    ...require('../daos/api/genreDao')
}

const publishingDao = {
    ...daoCommon,
    ...require('../daos/api/publishingDao')
}



module.exports ={
    bookDao,
    authorDao,
    formatDao,
    genreDao,
    publishingDao
}