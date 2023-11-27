import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import Border from "../shared/Border/Border";

function StlLoader() {
  const ref = useRef();
  const scene = new THREE.Scene();
  scene.add(new THREE.AxesHelper(5));

  var keyLight = new THREE.DirectionalLight(
    new THREE.Color("hsl(30, 100%, 75%)"),
    1.0
  );
  keyLight.position.set(-100, 0, 100);

  var fillLight = new THREE.DirectionalLight(
    new THREE.Color("hsl(240, 100%, 75%)"),
    0.75
  );
  fillLight.position.set(100, 0, 100);

  var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
  backLight.position.set(100, 0, -100).normalize();

  scene.add(keyLight);
  scene.add(fillLight);
  scene.add(backLight);

  const camera = new THREE.PerspectiveCamera(20, 500 / 500, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer({ alpha: true });
  camera.up = new THREE.Vector3(0, 0, 1);
  renderer.setSize(500, 500);
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = false;
  camera.position.x = 200;
  camera.position.y = 200;
  camera.position.z = 100;

  const material = new THREE.MeshPhysicalMaterial({
    color: "rgb(255, 255, 255)",
  });

  const loader = new STLLoader();
  loader.load(
    "assets/example.stl",
    function (geometry) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(1, 1, 1);
      scene.add(mesh);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  useEffect(() => {
    ref.current.innerHTML = "";
    ref.current?.appendChild(renderer.domElement);

    renderer.render(scene, camera);

    animate();
  }, [ref.current]);
  return (
    <Border border="1px solid black">
      <div ref={ref} />
    </Border>
  );
}
export default StlLoader;
