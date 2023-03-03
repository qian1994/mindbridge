import axios from 'axios'
import ApiClient from '../plugins/webBridge';
const apiClient = new ApiClient("context", "requestFromClient", "responseSignal");
apiClient.addResponseListener();

export function sendMsg(msg) {
    return apiClient.send({
        action: 'send-msg',
        data: msg
    });
}

export function sendSyncMsg(msg) {
    return apiClient.send({
        action: 'send-msg-sync',
        data: msg
    });
}

function _addMsgListener(callback) {
    apiClient.on("getFromServer", callback);
}

function _removeMsgListener(callback) {
    apiClient.off("getFromServer", callback);
} 

export const msgListener = {
    add: _addMsgListener,
    remove: _removeMsgListener
};

export async function  startSession(msg){
    // const testNetWork = await
    console.log(msg)
    return msg
    return apiClient.send({
        action: 'start-session',
        data: msg
    })
}

export function stopSession(msg) {
    return apiClient.send({
        action: 'stop-session',
        data: msg
    })
}

export function startStream(msg) {
    return apiClient.send({
        action: 'start-stream',
        data: msg
    })
}

export function stopStream(msg) {
    return apiClient.send({
        action: 'stop-stream',
        data: msg
    })
}


export function openDataAnalysis(msg) {
    return apiClient.send({
        action: 'open-analysis',
        data: msg
    })
}


export function postConfig(msg) {
    return apiClient.send({
        action: 'get-config',
        data: msg
    })
}

export function getApplications(msg) {
    return apiClient.send({
        action:'get-applications',
        data: msg
    })
}


export function homePage(msg) {
    return apiClient.send({
        action:'go-to-home-page',
        data: msg
    })
}


export function openTimeSeriseWindow(msg) {
    return apiClient.send({
        action:'open-time-serise-window',
        data: msg
    })
}


export function trigger(msg){
    return apiClient.send({
        action: 'trigger',
        data: msg
    })
}






export function startImpendenceTest(msg) {
    return apiClient.send({
        action: 'start-impendence-test',
        data: msg
    })
}

export function endImpendenceTest(msg) {
    return apiClient.send({
        action: 'end-impendence-test',
        data: msg
    })
}


export function getImpendenceFromServe(msg) {
    return apiClient.send({
        action: 'impendence-data',
        data: msg
    })
}

export function getConfigFromServe(msg) {
    return apiClient.send({
        action: 'get-config',
        data: msg
    })
}






export function postSelectChannel(msg) {
    return apiClient.send({
        action: 'post-time-serise-channel-show',
        data: msg
    })
}

export function initTestBoard(msg){
    return apiClient.send({
        action: 'init-board',
        data: msg
    })
}

export function fullScreen(msg) {
    return apiClient.send({
        action: 'full-screen',
        data: msg
    })
}

export function exitFullScreen(msg) {
    return apiClient.send({
        action: 'exit-full-screen',
        data: msg
    })
}

export function initDevTools(msg) {
    return apiClient.send({
        action: 'init-dev-tools',
        data: msg
    })
}