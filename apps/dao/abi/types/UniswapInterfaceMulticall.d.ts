/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface UniswapInterfaceMulticallInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentBlockTimestamp()": FunctionFragment;
    "getEthBalance(address)": FunctionFragment;
    "multicall((address,uint256,bytes)[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [{ target: string; gasLimit: BigNumberish; callData: BytesLike }[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;

  events: {};
}

export class UniswapInterfaceMulticall extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UniswapInterfaceMulticallInterface;

  functions: {
    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  multicall(
    calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[]
      ] & {
        blockNumber: BigNumber;
        returnData: ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
