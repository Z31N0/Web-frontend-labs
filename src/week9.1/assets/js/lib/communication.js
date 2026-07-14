/*
    DON'T MAKE CHANGES IN THIS FILE
*/

const _APIENDPOINT = "https://webtech.edu.technet.howest.be/wdf/jinglegoods";
const _FLUSHINTERVAL = 5000;

function generateSendSingleToServerWithCache() {
    let cache = [];
    setTimeout(flushCache, _FLUSHINTERVAL);

    async function flushCache() {
        if (cache.length !== 0) {
            const currentCacheLength = cache.length;
            await sendMultipleToServer(cache, false);
            cache = cache.slice(currentCacheLength);
            setTimeout(flushCache, _FLUSHINTERVAL);
        } else {
            setTimeout(flushCache, _FLUSHINTERVAL);
        }
    }

    function sendSingleMessageToServer(logMessage) {
        cache.push(logMessage);
        console.log(logMessage);
    }

    return sendSingleMessageToServer;
}

function sendMultipleToServer(logMessages, log = true) {
    const body = {
        sender: _YOURPERSONALIDENTIFIER,
        data: logMessages
    };

    if (log) console.log(logMessages);
    return fetch(_APIENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
        "Content-Type": "text/plain"
        },
        body: JSON.stringify(body),
        keepalive: true
    }).catch(() => {
        console.error("To also log to the central server, connect to the HOWEST-CIT-HUB network");
    });
}
/* eslint-disable */
const sendSingleToServer = generateSendSingleToServerWithCache();
/* eslint enable */