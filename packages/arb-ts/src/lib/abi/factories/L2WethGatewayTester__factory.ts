/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2WethGatewayTester,
  L2WethGatewayTesterInterface,
} from '../L2WethGatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Weth',
        type: 'address',
      },
    ],
    name: 'setL2WethAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061169e806100206000396000f3fe6080604052600436106100b65760003560e01c80637b3a3c8b1161006f5780637b3a3c8b1461020f57806395fcea7814610312578063a0c76a9614610327578063a7e28d4814610400578063d2ce7d6514610433578063f887ea40146104cd578063f8c8765e146104e2576100bd565b8063015234ab146100c2578063146bf4b1146100e95780631a4f73351461011a578063247b27681461014f5780632db09c1c146101645780632e567b3614610179576100bd565b366100bd57005b600080fd5b3480156100ce57600080fd5b506100d761052d565b60408051918252519081900360200190f35b3480156100f557600080fd5b506100fe610533565b604080516001600160a01b039092168252519081900360200190f35b34801561012657600080fd5b5061014d6004803603602081101561013d57600080fd5b50356001600160a01b0316610542565b005b34801561015b57600080fd5b506100fe610564565b34801561017057600080fd5b506100fe610573565b61014d600480360360a081101561018f57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156101d157600080fd5b8201836020820111156101e357600080fd5b803590602001918460018302840111600160201b8311171561020457600080fd5b509092509050610582565b61029d6004803603608081101561022557600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561025f57600080fd5b82018360208201111561027157600080fd5b803590602001918460018302840111600160201b8311171561029257600080fd5b50909250905061082c565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102d75781810151838201526020016102bf565b50505050905090810190601f1680156103045780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031e57600080fd5b5061014d610848565b34801561033357600080fd5b5061029d600480360360a081101561034a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561038c57600080fd5b82018360208201111561039e57600080fd5b803590602001918460018302840111600160201b831117156103bf57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108a5945050505050565b34801561040c57600080fd5b506100fe6004803603602081101561042357600080fd5b50356001600160a01b031661099d565b61029d600480360360c081101561044957600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561048f57600080fd5b8201836020820111156104a157600080fd5b803590602001918460018302840111600160201b831117156104c257600080fd5b5090925090506109d0565b3480156104d957600080fd5b506100fe610c2a565b3480156104ee57600080fd5b5061014d6004803603608081101561050557600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516610c39565b60025481565b6003546001600160a01b031681565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b031681565b6000546001600160a01b031681565b6000546001600160a01b03163314806105b657506000546001600160a01b03166105ab33610d0b565b6001600160a01b0316145b610602576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60608061060f8484610d1a565b91509150805160001461062d57506040805160208101909152600081525b60006106388961099d565b905061064c816001600160a01b0316610e44565b6106735760006106608a838b8b8b89610e4a565b905080156106715750505050610824565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106106d95780518252601f1990920191602091820191016106ba565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610739576040519150601f19603f3d011682016040523d82523d6000602084013e61073e565b606091505b50915091506000821580610753575060208251105b156107605750600161078f565b600061076d83600c610e76565b90508c6001600160a01b0316816001600160a01b03161461078d57600191505b505b80156107bd576107b18c308d8c60405180602001604052806000815250610ed6565b50505050505050610824565b5050506107cb818888610f56565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b606061083e86868660008088886109d0565b9695505050505050565b6000610852610fc5565b9050336001600160a01b038216146108a2576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b868686866108bf60025488610fea565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b8381101561092a578181015183820152602001610912565b50505050905090810190601f1680156109575780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6003546000906001600160a01b038381169116146109bd575060006109cb565b506004546001600160a01b03165b919050565b60603415610a10576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610a1d3361107d565b15610a3657610a2c8585611091565b9092509050610a73565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610abd576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610ac98c61099d565b9050610add816001600160a01b0316610e44565b610b23576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b6657600080fd5b505afa158015610b7a573d6000803e3d6000fd5b505050506040513d6020811015610b9057600080fd5b50516001600160a01b031614610be5576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610bf081858c6110cf565b9950610bff8c858d8d87610ed6565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6001546001600160a01b031681565b610c438484611144565b6001600160a01b038216610c8f576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b038116610cdb576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790555050565b61111061111160901b01190190565b60608083836040811015610d2d57600080fd5b810190602081018135600160201b811115610d4757600080fd5b820183602082011115610d5957600080fd5b803590602001918460018302840111600160201b83111715610d7a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610dcc57600080fd5b820183602082011115610dde57600080fd5b803590602001918460018302840111600160201b83111715610dff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b6000610e688730878660405180602001604052806000815250610ed6565b506001979650505050505050565b60008160140183511015610ec6576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b60025460009081610ef48786610eef8b838b848b6108a5565b61119a565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610f9157600080fd5b505af1158015610fa5573d6000803e3d6000fd5b50610fc0935050506001600160a01b038516905083836111bd565b505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561103457818101518382015260200161101c565b50505050905090810190601f1680156110615780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6001546001600160a01b0390811691161490565b60006060838360408110156110a557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610dcc57600080fd5b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b15801561112157600080fd5b505af1158015611135573d6000803e3d6000fd5b505050508190505b9392505050565b61114e828261120f565b6001600160a01b038116611196576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b5050565b600080546111b590849086906001600160a01b0316856112db565b949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610fc09084906112f2565b6001600160a01b038216611260576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b0316156112ad576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b60006112e9858585856113a3565b95945050505050565b6060611347826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114749092919063ffffffff16565b805190915015610fc05780806020019051602081101561136657600080fd5b5051610fc05760405162461bcd60e51b815260040180806020018281038252602a81526020018061163f602a913960400191505060405180910390fd5b6000806060846001600160a01b031687856040518082805190602001908083835b602083106113e35780518252601f1990920191602091820191016113c4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611445576040519150601f19603f3d011682016040523d82523d6000602084013e61144a565b606091505b5091509150816000811461145d57611465565b815160208301fd5b50610539979650505050505050565b60606111b584846000858561148885610e44565b6114d9576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115185780518252601f1990920191602091820191016114f9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461157a576040519150601f19603f3d011682016040523d82523d6000602084013e61157f565b606091505b509150915061158f82828661159a565b979650505050505050565b606083156115a957508161113d565b8251156115b95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116035781810151838201526020016115eb565b50505050905090810190601f1680156116305780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212208bc73a64e2e1a00f1bc5b8b8a58537ce19e7f04863222bc0b9c0954fb501cbeb64736f6c634300060b0033'

export class L2WethGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2WethGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2WethGatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2WethGatewayTester {
    return super.attach(address) as L2WethGatewayTester
  }
  connect(signer: Signer): L2WethGatewayTester__factory {
    return super.connect(signer) as L2WethGatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2WethGatewayTesterInterface {
    return new utils.Interface(_abi) as L2WethGatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2WethGatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L2WethGatewayTester
  }
}
