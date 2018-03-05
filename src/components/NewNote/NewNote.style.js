import { colors } from '../../styles/global.style';

export const container = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

export const heading = {
  display: 'flex',
  flexDirection: 'row',
};

export const title = {
  fontSize: 20,
  flexGrow: 1,
  alignSelf: 'center',
};

export const titleInput = {
  backgroundColor: colors.primary,
  padding: 4,
  borderRadius: 4,
  border: `1px solid ${colors.border}`,
};

export const noteHeading = {
  display: 'flex',
  flexDirection: 'row',
};

export const noteHint = {
  flexGrow: 1,
  fontSize: 20,
  fontWeight: '100',
  fontStyle: 'italic',
  paddingTop: 8,
  paddingBottom: 8,
};

export const newNoteIcon = {
  alignSelf: 'center',
};

export const notes = {
  ...titleInput,
  flexGrow: 1,
  underlineColorAndroid: 'transparent',
  textAlignVertical: 'top',
};

export const actionSection = {
  display: 'flex',
  flexDirection: 'row',
};
