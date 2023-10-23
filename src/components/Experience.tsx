import { Building, CalendarDays, MapPin } from 'lucide-react'
import { Title } from './Title'

type WorkProps = {
  company: string
  office: string
  workload: 'full time' | 'part time'
  location: string
  startDate: Date
  finalDate?: Date
}

function Work({
  company,
  office,
  workload,
  location,
  startDate,
  finalDate,
}: WorkProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-b-port-gray-300 p-4 last:border-none">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-2xl font-normal text-port-blue-800">
          {office}
        </span>
        <span className="font-secondary rounded-full bg-port-green-50 px-8 py-2 text-sm font-semibold text-port-green-800">
          {workload}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-24">
          <span className="font-secondary flex items-center gap-2 text-xs font-medium text-port-gray-400">
            <Building size={18} />
            {company}
          </span>
          <span className="font-secondary flex items-center gap-2 text-xs font-medium text-port-gray-400">
            <MapPin size={18} />
            {location}
          </span>
        </div>
        <span className="font-secondary flex items-center gap-2 text-xs font-medium text-port-gray-400">
          <CalendarDays size={18} />
          {`${startDate.toISOString()} - ${
            finalDate?.toISOString() || 'atual'
          }`}
        </span>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Experiência" />

      <div className="flex flex-col gap-10">
        <Work
          company="PULSE - Grupo Mateus"
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          company="PULSE - Grupo Mateus"
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          company="PULSE - Grupo Mateus"
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          company="PULSE - Grupo Mateus"
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
      </div>
    </div>
  )
}
