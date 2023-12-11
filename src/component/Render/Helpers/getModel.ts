import * as THREE from "three";

const getModel = (
  geometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>,
  wireframe: boolean
) => {
  if (wireframe) {
    const wireframe = new THREE.WireframeGeometry(geometry);

    const line = new THREE.LineSegments(wireframe);
    line.name = "wireframe";
    if (Array.isArray(line.material)) return;
    line.material.depthTest = false;
    line.material.opacity = 0.25;
    line.material.transparent = true;

    return line;
  } else {
    const material = new THREE.MeshPhysicalMaterial({
      color: "rgb(255, 255, 255)",
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = "mesh";
    return mesh;
  }
};
export default getModel;
