import { Guest } from 'app/models/guest';

export type State = {
  isSearchOpen: boolean;
  isRsvpOpen: boolean;
  userSearchResult?: Guest[];
  showSuccessSnack?: boolean;
  loading?: boolean;
  error?: Error;
};
