
import { BigNumber } from 'bignumber.js';
import { W3, SoltsiceContract } from 'soltsice';

/**
 * AceToken API
 */
export class AceToken extends SoltsiceContract {
    static get Artifacts() { return require('../artifacts/AceToken.json'); }

    static get BytecodeHash() {
        // we need this before ctor, but artifacts are static and we cannot pass it to the base class, so need to generate
        let artifacts = AceToken.Artifacts;
        if (!artifacts || !artifacts.bytecode) {
            return undefined;
        }
        let hash = W3.sha3(JSON.stringify(artifacts.bytecode));
        return hash;
    }

    constructor(
        deploymentParams: string | W3.TC.TxParams | object,
        ctorParams?: {},
        w3?: W3,
        link?: SoltsiceContract[]
    ) {
        // tslint:disable-next-line:max-line-length
        super(
            w3,
            AceToken.Artifacts,
            ctorParams ? [] : [],
            deploymentParams,
            link
        );
    }
    /*
        Contract methods
    */
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public mintingFinished( txParams?: W3.TC.TxParams): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.mintingFinished
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public name( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.name
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public approve = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_spender: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.approve(_spender, _value, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_spender: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.approve.sendTransaction(_spender, _value, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_spender: string, _value: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.approve.request(_spender, _value).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_spender: string, _value: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.approve.estimateGas(_spender, _value).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:member-ordering
    public toggleTransferFor = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_for: string, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.toggleTransferFor(_for, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_for: string, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.toggleTransferFor.sendTransaction(_for, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_for: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.toggleTransferFor.request(_for).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_for: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.toggleTransferFor.estimateGas(_for).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public totalSupply( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.totalSupply
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public specialAllowed(_0: string, txParams?: W3.TC.TxParams): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.specialAllowed
                    .call(_0, txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public transferFrom = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_from: string, _to: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.transferFrom(_from, _to, _value, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_from: string, _to: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transferFrom.sendTransaction(_from, _to, _value, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_from: string, _to: string, _value: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.transferFrom.request(_from, _to, _value).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_from: string, _to: string, _value: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transferFrom.estimateGas(_from, _to, _value).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public DISTRIBUTION_INVESTORS( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.DISTRIBUTION_INVESTORS
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public decimals( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.decimals
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public transferAllowed( txParams?: W3.TC.TxParams): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.transferAllowed
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public communityTokensHolder( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.communityTokensHolder
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public DISTRIBUTION_TEAM( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.DISTRIBUTION_TEAM
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public mint = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_to: string, _amount: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.mint(_to, _amount, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_to: string, _amount: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.mint.sendTransaction(_to, _amount, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_to: string, _amount: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.mint.request(_to, _amount).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_to: string, _amount: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.mint.estimateGas(_to, _amount).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:member-ordering
    public toggleTransfer = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        ( txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.toggleTransfer( txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: ( txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.toggleTransfer.sendTransaction( txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.toggleTransfer.request().params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.toggleTransfer.estimateGas().then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public freeToExtraMinting( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.freeToExtraMinting
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public decreaseApproval = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_spender: string, _subtractedValue: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.decreaseApproval(_spender, _subtractedValue, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_spender: string, _subtractedValue: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.decreaseApproval.sendTransaction(_spender, _subtractedValue, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_spender: string, _subtractedValue: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.decreaseApproval.request(_spender, _subtractedValue).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_spender: string, _subtractedValue: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.decreaseApproval.estimateGas(_spender, _subtractedValue).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public MAXSOLD_SUPPLY( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.MAXSOLD_SUPPLY
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public setTeamTokensHolder = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_tokenHolder: string, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.setTeamTokensHolder(_tokenHolder, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_tokenHolder: string, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.setTeamTokensHolder.sendTransaction(_tokenHolder, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_tokenHolder: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.setTeamTokensHolder.request(_tokenHolder).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_tokenHolder: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.setTeamTokensHolder.estimateGas(_tokenHolder).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public balanceOf(_owner: string, txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.balanceOf
                    .call(_owner, txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public DISTRIBUTION_COMMUNITY( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.DISTRIBUTION_COMMUNITY
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public finishMinting = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        ( txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.finishMinting( txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: ( txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.finishMinting.sendTransaction( txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.finishMinting.request().params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.finishMinting.estimateGas().then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public owner( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.owner
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public symbol( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.symbol
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public setCommunityTokensHolder = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_tokenHolder: string, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.setCommunityTokensHolder(_tokenHolder, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_tokenHolder: string, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.setCommunityTokensHolder.sendTransaction(_tokenHolder, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_tokenHolder: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.setCommunityTokensHolder.request(_tokenHolder).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_tokenHolder: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.setCommunityTokensHolder.estimateGas(_tokenHolder).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:member-ordering
    public transfer = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_to: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.transfer(_to, _value, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_to: string, _value: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transfer.sendTransaction(_to, _value, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_to: string, _value: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.transfer.request(_to, _value).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_to: string, _value: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transfer.estimateGas(_to, _value).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public extraSupply( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.extraSupply
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public currentOwner( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.currentOwner
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public increaseApproval = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_spender: string, _addedValue: BigNumber | number, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.increaseApproval(_spender, _addedValue, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (_spender: string, _addedValue: BigNumber | number, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.increaseApproval.sendTransaction(_spender, _addedValue, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_spender: string, _addedValue: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.increaseApproval.request(_spender, _addedValue).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_spender: string, _addedValue: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.increaseApproval.estimateGas(_spender, _addedValue).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:member-ordering
    public extraMint = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        ( txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.extraMint( txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: ( txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.extraMint.sendTransaction( txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.extraMint.request().params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.extraMint.estimateGas().then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public investorSupply( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.investorSupply
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public allowance(_owner: string, _spender: string, txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.allowance
                    .call(_owner, _spender, txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public teamTokensHolder( txParams?: W3.TC.TxParams): Promise<string> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.teamTokensHolder
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
    // tslint:disable-next-line:member-ordering
    public transferOwnership = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (newOwner: string, txParams?: W3.TC.TxParams): Promise<W3.TC.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.then((inst) => {
                    inst.transferOwnership(newOwner, txParams || this._sendParams)
                        .then((res) => resolve(res))
                        .catch((err) => reject(err));
                });
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: (newOwner: string, txParams?: W3.TC.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transferOwnership.sendTransaction(newOwner, txParams || this._sendParams)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (newOwner: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        resolve(inst.transferOwnership.request(newOwner).params[0].data);
                    });
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (newOwner: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.then((inst) => {
                        inst.transferOwnership.estimateGas(newOwner).then((g) => resolve(g));
                    });
                });
            }
        });
    
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public HARDCAPPED_SUPPLY( txParams?: W3.TC.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.then((inst) => {
                inst.HARDCAPPED_SUPPLY
                    .call( txParams || this._sendParams)
                    .then((res) => resolve(res))
                    .catch((err) => reject(err));
            });
        });
    }
    
}
