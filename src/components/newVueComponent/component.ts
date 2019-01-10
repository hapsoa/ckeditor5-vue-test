import Vue from 'vue';
import Component from 'vue-class-component';

// @Component 데코레이터는 클래스가 Vue 컴포넌트임을 나타냅니다.
@Component({
  // 모든 컴포넌트 옵션이 이곳에 허용됩니다.
  template: '<button @click="onClick">Click!</button>',
})
export default class MyComponent extends Vue {
  // 초기 데이터는 인스턴스 속성으로 선언할 수 있습니다.
  public message: string = 'Hello!';

  // 컴포넌트 메소드는 인스턴스 메소드로 선언할 수 있습니다.
  public onClick(): void {
    window.alert(this.message);
  }
}
