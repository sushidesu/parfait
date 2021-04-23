import { Stage, Layer, Rect } from "react-konva"

export type Props = {}

type Building = {
  type: "building"
  width: number
  height: number
} | {
  type: "road"
  width: number
}

type RectProps = {
  width: number
  height: number
  x: number
  y: number
  fill: string
}

export function Map(): JSX.Element {
  const buildings: Building[][] = [[
    {
      type: "building",
      width: 30,
      height: 40
    },
    {
      type: "building",
      width: 80,
      height: 40
    },
    {
      type: "building",
      width: 50,
      height: 40
    },
    {
      type: "road",
      width: 20,
    },
    {
      type: "building",
      width: 30,
      height: 40
    },
  ],
  [
    {
      type: "building",
      width: 30,
      height: 30,
    }
  ]
  ]

  const CANVAS_HEIGHT = 300
  const BUILDING_COLOR = "#ccc"
  const ROAD_COLOR = "#efefef"
  const GAP_X = 10
  const GAP_Y = 10

  const rectangles: RectProps[] = []
  let currentPositionY = 0
  for (const buildingsRow of buildings) {
    const rectanglesWithGapRow: RectProps[] = []
    let currentPositionX = 0

    for (const building of buildingsRow) {
      switch (building.type) {
        case "building":
          rectanglesWithGapRow.push({
            width: building.width,
            height: building.height,
            x: currentPositionX,
            y: currentPositionY,
            fill: BUILDING_COLOR,
          })
          currentPositionX += (building.width + GAP_X)
          break
        case "road":
          rectanglesWithGapRow.push({
            width: building.width,
            height: CANVAS_HEIGHT,
            x: currentPositionX,
            y: currentPositionY,
            fill: ROAD_COLOR,
          })
          currentPositionX += (building.width + GAP_X)
          break
      }
    }
    rectangles.push(...rectanglesWithGapRow)
    currentPositionY += 10
  }

  // const rectanglesWithGapRow: RectProps[] = []
  // let currentPosition = 0
  // for (const building of buildings) {
  //   switch (building.type) {
  //     case "building":
  //       rectanglesWithGapRow.push({
  //         width: building.width,
  //         height: building.height,
  //         x: currentPosition,
  //         fill: BUILDING_COLOR,
  //       })
  //       currentPosition += (building.width + GAP_X)
  //       break
  //     case "road":
  //       rectanglesWithGapRow.push({
  //         width: building.width,
  //         height: CANVAS_HEIGHT,
  //         x: currentPosition,
  //         fill: ROAD_COLOR,
  //       })
  //       currentPosition += (building.width + GAP_X)
  //       break
  //   }
  // }

  return (
    <div>
      <Stage className={"mx-auto"} width={300} height={CANVAS_HEIGHT}>
        <Layer>
          {rectangles.map((rect, index) => {
            return (
            <Rect key={index} {...rect} />
          )})}
        </Layer>
      </Stage>
    </div>
  )
}
