package com.calculatorimc;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactRootView;

import expo.modules.ReactActivityDelegateWrapper;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "calculatorIMC";
  }
  
  // TODO: verificar pra que serve ai mudar
  // @Override
  // protected ReactActivityDelegate createReactActivityDelegate() {
  //   return new ReactActivityDelegateWrapper(
  //     this,
  //     new ReactActivityDelegate(this, getMainComponentName()) {
  //       @Override
  //       protected ReactRootView createRootView() {
  //         return new RNGestureHandlerEnabledRootView(MainActivity.this);
  //       }
  //     }
  //   );
  // }
}
