export function getTime(date: string | number | Date) {
  return new Date(date).getTime();
}

export function toISOString(date: string | number | Date) {
  return new Date(date).toISOString();
}

export function getTimezoneFromDateString(_date: string) {
  const mapper: Record<string, string> = {
    '+00:00': 'UTC',
    '+01:00': 'Europe/Paris',
    '+02:00': 'Europe/Stockholm',
    '+03:00': 'Europe/Moscow',
    '+04:00': 'Asia/Dubai',
    '+05:00': 'Asia/Karachi',
    '+06:00': 'Asia/Dhaka',
    '+07:00': 'Asia/Bangkok',
    '+08:00': 'Asia/Shanghai',
    '+09:00': 'Asia/Tokyo',
    '+10:00': 'Australia/Sydney',
    '+11:00': 'Pacific/Noumea',
    '+12:00': 'Pacific/Fiji',
    '-02:00': 'America/Noronha',
    '-03:00': 'America/Sao_Paulo',
    '-04:00': 'America/Santiago',
    '-05:00': 'America/Bogota',
    '-06:00': 'America/Mexico_City',
    '-07:00': 'America/Phoenix',
    '-08:00': 'America/Los_Angeles',
    '-09:00': 'America/Anchorage',
    '-10:00': 'Pacific/Honolulu',
    '-11:00': 'Pacific/Midway',
    '-12:00': 'Pacific/Tarawa',
    // Additional time zones
    '+05:30': 'Asia/Kolkata',
    '+05:45': 'Asia/Kathmandu',
    '+08:45': 'Australia/Eucla',
    '+09:30': 'Australia/Darwin',
    '+10:30': 'Australia/Adelaide',
    '+12:45': 'Pacific/Chatham',
    '+13:00': 'Pacific/Apia',
    '+14:00': 'Pacific/Kiritimati',
    '-02:30': 'America/St_Johns',
    '-03:30': 'America/St_Johns',
    '-04:30': 'America/Caracas',
    '-09:30': 'Pacific/Marquesas',
  };

  const defaultTimezone = 'UTC';

  const match = _date.match(/([+-][0-9]{2}):([0-9]{2})$/)?.[0];
  if (match) {
    return mapper[match] ?? defaultTimezone;
  }

  return defaultTimezone;
}
