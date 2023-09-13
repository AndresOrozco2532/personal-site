import { Injectable } from '@angular/core';
import { AVAILABLE_THEMES } from '@app/core/constants/themes.constant';
import { ThemeProperty } from '@app/core/models/theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public updateTheme(theme: string): void {
    const properties: ThemeProperty =
      AVAILABLE_THEMES[theme].PROPERTIES ??
      AVAILABLE_THEMES.DEFAULT_THEME.PROPERTIES;
    this._setTheme(properties);
  }

  private _setTheme(properties: ThemeProperty): void {
    Object.keys(properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        properties[property]
      );
    });
  }
}
