import {destinazione} from '@models/interfDestinazione'

 export interface IParameter {
   da: destinazione;
      a: destinazione;
      dal: Date
      al: Date
}

export type IParametertype = IParameter | null
