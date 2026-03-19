// Stub data hook — replace the return value with a real fetch when the
// HubSpot / backend API is ready. Components won't need to change.
import {
  CLIENT, KPI_DATA, DELIVERABLES, SLA,
  FAQ_DATA, TURNAROUND, PLATFORM_COLORS, PLATFORM_ICONS,
} from '../data/clientData';

const STATIC_DATA = {
  CLIENT, KPI_DATA, DELIVERABLES, SLA,
  FAQ_DATA, TURNAROUND, PLATFORM_COLORS, PLATFORM_ICONS,
};

export function useClientData() {
  // TODO: swap for useEffect + fetch('/api/client') and real loading/error state
  return { data: STATIC_DATA, loading: false, error: null };
}
