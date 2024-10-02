function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora)
} catch(err) {
    // tratar erro
    // console.log(err);
} finally {
    console.log('Tenha um bom dia');
}

try {
    // é executada quando não há erros
    // console.log('abri um arquivo');
    // console.log('manipulei o arquivo e gerou um erro');
    // console.log('fechei o arquivo');

    try {
        // console.log(b);
    } catch (err) {
        // console.log('deu erro');
    } finally {
        // console.log('também sou finally');
    }

} catch (err) {
    // é executada quando há erros
    // console.log('tratando o erro');
} finally {
    // será executado sempre
    // console.log('eu sempre sou executado');
}