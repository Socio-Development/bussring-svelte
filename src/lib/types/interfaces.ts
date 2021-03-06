export interface IApiData {
  data: {
    stopPlace: {
      name: string
      id: string
      estimatedCalls: IEstimatedCalls[]
    }
  }
}

export interface IDeparture {
  departureTime: Date
  destination: string
  line: string
  transport: string
}

export interface IEstimatedCalls {
  expectedDepartureTime: string
  destinationDisplay: {
    frontText: string
  }
  serviceJourney: {
    line: {
      publicCode: string
      transportMode: string
    }
  }
}

export interface IStopPlace {
  name: string
  id: string
  estimatedCalls: IEstimatedCalls[]
}

export interface ITableData {
  headings: string[],
  body: IDeparture[]
}