import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from '../../globals';

@Injectable({
    providedIn: 'root'
})
export class ArchivosCoasService{
    constructor(private httpClient:HttpClient) {}

    dataMasiva(idConexion, myFiles:string []){
        //console.log("Files Service: ",myFiles);
        
        const formData = new FormData();

        for (var i = 0; i < myFiles.length; i++) {
            formData.append("file", myFiles[i])
        }
        formData.append("dataMasiva",idConexion);
        const req = new HttpRequest('POST', `${global.URL_API}api/bim/mw/archivosMultiples`, formData, {
            reportProgress: true,
            responseType: 'json'
        });
        //console.log(req);
        
        return this.httpClient.request(req);
        //this.httpClient.post( `${global.URL_API}api/bim/mw/archivosMultiples`, formData)
    }
}