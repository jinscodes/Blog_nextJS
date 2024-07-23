## 리액트 생명주기

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6f042452-c5a7-4d2e-a913-7db5182162df)

위는 리액트의 생명주기에 대한 이미지입니다.

이 과정은 컴포넌트의 생성부터 컴포넌트 정리까지로 이뤄져 있습니다.

리액트 생명주기의 문서에 따르면, 리액트 컴포넌트의 생명주기는 크게 세가지 단계로 나누어집니다.

## 1️⃣ Mounting

> **Mounting**은 생명주기 프로세스의 처음 과정에서 이뤄지며 **컴포넌트가 생성되는 시간을 의미**합니다.

![2](https://github.com/user-attachments/assets/24761219-0600-4229-b9cd-4b6c7d7058a0)

#### Mounting 과정

(1) Mounting 컴포넌트 =>

(2) 리턴값의 결과를 랜더링 =>

(3) 랜더링된 상태를 드로잉 =>

(4) 가상 DOM과 DOM 요소 비교 =>

(5) 만약 가상 DOM과 DOM 요소 중 다른 점이 감지된다면 업데이트 || 처음 랜더링 때는 당연히 비교할 정보(요소)가 없음. 그렇기 때문에, 모든 요소를 DOM에 드로잉 =>

(6) `useEffect` 또는 `useLayoutEffect` 실행

#### Mounting 관련 예시 코드

![3](https://github.com/user-attachments/assets/50015b40-bcc8-450f-9bab-24eb4ddbc6db)

**_constructor_**

`constructor`는 컴포넌트가 Mount 될 때 가장 먼저 호출 되는 코드임

주로, 컴포넌트의 상태를 정할 때 사용됨

**_componentWillMount_**

`componentWillMount` 는 컴포넌트가 DOM에 렌더링 되기 전에 실행되는 코드임

현재 리액트에서는 거의 사용되지 않는 legacy임

컴포넌트가 특정 조건에서 랜더링 되야하는지 아닌지에 대해 세팅할 때 사용되었음

이 메서드에서 만들어진 변화는 첫 랜더링 시에는 반영되지 않지만, 이어지는 다음 랜더링에 영향을 줌

**_render_**

`render`는 `constructor`가 끝난 다음 실행되는 코드임

이 메서드는 HTML 마크업을 사용자에게 표시하는 것을 담당함

컴포넌트의 라이프사이클의 이 시점에, 컴포넌트는 DOM에 마운트됨

**_componentDidMount_**

`DidMount`는 컴포넌트가 DOM에서 렌더링된 후 호출됨

API에서 데이터 가져오기, 이벤트 수신기 설정 또는 외부 라이브러리와의 상호 작용과 같이 DOM에 액세스해야 하는 작업을 수행하는 데 사용됨

일회성 설정이나 데이터 가져오기 작업을 수행하기에 좋음

이 메서드에서 특정 요소를 변경하는 것이 재렌더링 또는 업데이트를 트리거할 수 있음

## 2️⃣ Updating

> Updating은, 컴포넌트가 생성되고 사라지기 전에, props나 state가 변경될 때 일어나는 일을 의미합니다.

![4](https://github.com/user-attachments/assets/0ccf7f64-740f-4a51-bc78-954a024938b9)

#### Updating 과정

(1) state 또는 props이 useEffect 또는 사용자 상호작용에 의해 변경 =>

(2) 변경된 props 또는 state에 따라 DOM 다시 그리기 =>

(3) 가상 DOM과 DOM의 요소 비교 =>

(4) 가상 DOM과 상위 요소(기존 요소)의 차이가 감지되면 해당 부분만 업데이트 =>  
(단, 소품이나 상태가 변경되었지만 UI에 변화가 없으면 DOM은 업데이트되지 않습니다.)

(5) useEffect 및 useLayoutEffect 실행

#### Updating 관련 예시 코드

![5](https://github.com/user-attachments/assets/d26f23cc-5a50-4dab-942b-e0cef71143d2)

**_shouldComponentUpdate_**

컴포넌트가 업데이트되기 전에 `shouldComponentUpdate`가 호출됨

이 메서드는 컴포넌트를 업데이트해야 하는지 여부를 결정하는 boolean 값을 반환함

이 메서드가 true를 반환하면 컴포넌트가 업데이트되고, false를 반환하면 컴포넌트가 업데이트되지 않음

**_componentWillUpdate_**

`componentWillUpdate는` 컴포넌트의 업데이트 주기가 시작되기 직전에 호출됨

컴포넌트가 업데이트되기 전에 필요한 작업을 수행할 수 있음

❗ ️ 이 방법은 렌더링의 무한 루프를 유발할 수 있으므로 상태를 업데이트하는 데 권장되지 않습니다. 주로 API 호출, DOM 업데이트 또는 새로운 데이터를 받을 컴포넌트 준비와 같은 작업에 사용됩니다. ComponentWillUpdate는 컴포넌트 업데이트를 처리하기 위해 ComponentDidUpdate와 함께 사용되는 경우가 많습니다.

**_componentDidUpdate_**

`componentDidUpdate` 메서드는 컴포넌트가 업데이트되고 다시 렌더링된 후 호출되는 메서드임

컴포넌트의 props나 state가 변경되었을 때, 추가 작업 등을 수행하는 데 유용함

**_getSnapshotBeforeUpdate_**

컴포넌트의 UI가 업데이트되기 직전에 `getSnapshotBeforeUpdate` 메서드가 호출됨

이를 통해 컴포넌트가 UI의 현재 상태에 대한 일부 정보를 캡처할 수 있음

이 메서드는 세 번째 매개 변수로 전달된 값을 ComponentDidUpdate 메서드에 반환함

## 3️⃣ Cleaning up (Unmounting)

> Cleaning up 또는 Unmounting은 DOM에서 컴포넌트를 제거하고 더 이상 렌더링하거나 액세스할 수 없는 라이프사이클 단계를 말합니다.

![6](https://github.com/user-attachments/assets/df9f154b-3d4d-4ddf-92e3-dc0c7c43b2bf)

#### Unmounting 과정

(1) React는 컴포넌트가 있는지 확인하기 위해 일련의 정리 작업을 수행 =>

(2) 관련 리소스가 적절하게 배치 =>

#### Unmounting 관련 예시 코드

![7](https://github.com/user-attachments/assets/00ca115d-0f69-4368-9807-0b733c3b4160)

**_componentWillUnmount_**

`componentWillUnmount`은 컴포넌트가 DOM에서 제거되기 직전에 호출됨

필요한 모든 정리를 수행할 수 있음

`componentWillUnmount`가 호출되면 컴포넌트가 DOM에서 제거되고 컴포넌트의 state와 props가 모두 파괴됩니다

❗ ️ 컴포넌트를 마운트 해제하면 다시 마운트할 수 없습니다. 컴포넌트를 다시 렌더링해야 하는 경우 새 인스턴스를 생성해야 합니다.

**_componentDidCatch_**

렌더링하는 동안 오류가 발견

이 메서드 집합에서 State를 호출할 수 있음

자식 컴포넌트에서 처리되지 않은 자바스크립트 오류를 발견하고 충돌한 컴포넌트 대신 폴백 UI를 표시하는 데 사용되었습니다

❗ ️ 이 방법은 하위 구성요소에서만 오류를 잡아내고 구성요소 자체에서는 오류를 잡아내지 못합니다.

## Deprecated Methods

- componentWillMount()
- compoentWillReceiveProps()
- componentWillUpdate()
