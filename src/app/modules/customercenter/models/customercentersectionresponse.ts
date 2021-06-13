export interface CustomerCenterSectionesponse {
       id : number,
       title : string,
        customerCenterInfos : CustomerCenterInfo[]
     }

     export interface CustomerCenterInfo {
        id : number,
        iconUrl : string,
        description  : string,
        sectionId  : string
      }

     