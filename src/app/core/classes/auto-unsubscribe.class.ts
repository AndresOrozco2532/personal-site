import { Component, Inject, OnDestroy } from '@angular/core';

@Component({ template: '' })
export abstract class AutoUnsubscribeOnDetroy implements OnDestroy {
  private _blackList: Array<string>;
  private _arrayName: string;

  constructor(
    @Inject(Array<string>) blackList: Array<string> = [],
    @Inject(String) arrayName: string = ''
  ) {
    this._blackList = [
      '_doUnsubscribe',
      '_doUnsubscribeIfArray',
      '_isFunction',
      '_blackList',
      '_arrayName',
      ...blackList,
    ];
    this._arrayName = arrayName;
  }

  ngOnDestroy(): void {
    this._autoUnsubscribe();
  }

  private _autoUnsubscribe() {
    if (this._arrayName) {
      this._doUnsubscribeIfArray(this[this._arrayName]);
      return;
    }

    for (let propName in this) {
      if (this._blackList.includes(propName)) continue;
      const property = this[propName];
      this._doUnsubscribe(property);
    }
  }

  private _doUnsubscribe = (subscription) => {
    if (subscription && this._isFunction(subscription.unsubscribe))
      subscription.unsubscribe();
  };

  private _doUnsubscribeIfArray = (subscriptionsArray) => {
    Array.isArray(subscriptionsArray) &&
      subscriptionsArray.forEach(this._doUnsubscribe);
  };

  private _isFunction = (fn) => typeof fn === 'function';
}
