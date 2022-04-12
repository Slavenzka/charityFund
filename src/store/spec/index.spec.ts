import { ReactNode } from 'react'
import { ModalOptionsType } from 'components/organisms/Modal/Modal.spec'
import { DeviceTypes } from 'specs/enum.spec'
import { LanguageOptions } from 'utils/const'

export interface StoreModalSlice {
  content: ReactNode;
  options: ModalOptionsType;
}

export interface StoreUISlice {
  modal: StoreModalSlice;
  lang: LanguageOptions
}

type ElasticConfigItemType = {
  baseSize: number;
  baseWidth: number;
  widthLimit: number;
}

type ElasticConfigType = Record<DeviceTypes, ElasticConfigItemType>

export interface StoreElasticSlice {
  deviceType: DeviceTypes | null;
  curFontSize: number;
  config: ElasticConfigType;
}

export interface StoreTableSlice {
  selection: string[];
}

export interface RootReducerType {
  ui: StoreUISlice;
  elastic: StoreElasticSlice;
  table: StoreTableSlice;
}