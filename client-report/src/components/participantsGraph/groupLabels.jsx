// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as globals from "../globals";
import React from "react";

const Users = ({selectedGroup}) => {
  return (
    <g width={7} fill={selectedGroup ? "white" : "black"} transform={`translate(0,-9)`}>
      <ellipse cx="1.99335548" cy="1.42348754" rx="1.32890365" ry="1.42348754"></ellipse>
      <ellipse cx="7.97342193" cy="1.42348754" rx="1.32890365" ry="1.42348754"></ellipse>
      <ellipse cx="4.9833887" cy="3.55871886" rx="1.99335548" ry="2.13523132"></ellipse>
      <path d="M5.00117299,9.96097809 C5.00117299,9.96097809 6.62230891,10.0114174 7.68078118,9.90804379 C8.71979028,9.68548656 8.68930157,8.54680635 8.56993064,7.60860174 C8.45055972,6.67039712 8.30866966,6.21201846 7.89678175,5.754764 C7.44177495,5.39446702 7.35675139,5.37086903 6.82758304,5.37086903 C6.32093221,5.58234958 5.91204622,6.1465492 5.00117299,6.15111611 C4.09029975,6.15568303 3.18473945,5.34329891 3.18473945,5.34329891 C3.18473945,5.34329891 1.65361053,5.12863813 1.43578019,7.60860174 C1.43578019,7.60860174 1.07622865,8.84611894 1.65361053,9.45725427 C1.72351865,9.63571449 2.09387147,9.88326534 2.47340799,9.96097809 C2.85294451,10.0386908 5.00117299,9.96097809 5.00117299,9.96097809 Z"></path>
      <path d="M6.92076135,4.96353554 C6.92076135,4.96353554 7.23363554,4.37557509 7.29859415,4.07204848 C7.36355276,3.76852188 7.29859415,3.19806817 7.29859415,3.19806817 C7.29859415,3.19806817 7.92700526,3.37026041 8.27714593,3.30897817 C8.62728661,3.24769594 9.30745217,2.8464743 9.30745217,2.8464743 C9.30745217,2.8464743 9.53830284,2.87921119 9.6081284,2.95239692 C9.67795396,3.02558265 9.83288333,3.39719047 9.83288333,3.39719047 C9.83288333,3.39719047 9.99665411,4.24739039 9.99004707,4.67426706 C9.98344003,5.10114373 9.8029519,5.33104155 9.8029519,5.33104155 C9.8029519,5.33104155 9.56490971,5.59634517 9.37231943,5.64049708 C9.17972915,5.68464899 8.27714593,5.68083724 8.27714593,5.68083724 C8.27714593,5.68083724 7.95694141,5.31578175 7.71833094,5.18959652 C7.47972047,5.0634113 6.92076135,4.96353554 6.92076135,4.96353554 Z"></path>
      <path d="M0.0104623452,4.96353554 C0.0104623452,4.96353554 0.323336532,4.37557509 0.388295143,4.07204848 C0.453253753,3.76852188 0.388295143,3.19806817 0.388295143,3.19806817 C0.388295143,3.19806817 1.01670626,3.37026041 1.36684693,3.30897817 C1.7169876,3.24769594 2.39715316,2.8464743 2.39715316,2.8464743 C2.39715316,2.8464743 2.62800384,2.87921119 2.69782939,2.95239692 C2.76765495,3.02558265 2.92258432,3.39719047 2.92258432,3.39719047 C2.92258432,3.39719047 3.08635511,4.24739039 3.07974807,4.67426706 C3.07314103,5.10114373 2.8926529,5.33104155 2.8926529,5.33104155 C2.8926529,5.33104155 2.65461071,5.59634517 2.46202043,5.64049708 C2.26943015,5.68464899 1.36684693,5.68083724 1.36684693,5.68083724 C1.36684693,5.68083724 1.04664241,5.31578175 0.808031938,5.18959652 C0.569421471,5.0634113 0.0104623452,4.96353554 0.0104623452,4.96353554 Z" transform="translate(1.545203, 4.263697) scale(-1, 1) translate(-1.545203, -4.263697) "></path>
    </g>
  )
}

const Label = ({ptptCount, centroid, gid, selectedGroup /*, handleClick*/}) => {
  return (
    <g transform={`translate(${centroid.x},${centroid.y})`}>
      <text
        x={-11}
        style={{
          fontWeight: 700,
          fill: selectedGroup === gid ? "white" : "black",
          fontSize: 16,
          pointerEvents: "none",
          userSelect: "none"
        }}>
        {globals.groupLabels[gid]}
      </text>
      <Users selectedGroup={selectedGroup === gid}/>
      <text
        x={12}
        style={{
          fontWeight: 300,
          fill: selectedGroup === gid ? "white" : "black",
          fontSize: 16,
          pointerEvents: "none",
          userSelect: "none"
        }}>
        {ptptCount}
      </text>
    </g>
  )
}

const GroupLabels = ({groups, centroids, selectedGroup/*, handleClick*/}) => {

  if (!centroids || !groups) { return null }


  return (
    <g>
      {centroids.map((centroid, i) => {
        return (
          <Label
            key={groups[i].id}
            selectedGroup={selectedGroup}
            gid={groups[i].id}
            ptptCount={groups[i]["n-members"]}
            centroid={centroid}/>
        )
      })}
    </g>
  )
}

export default GroupLabels;


// {/*<rect
//   height={20}
//   width={getBackgroundRectWidth(ptptCount)}
//   rx="4" ry="4"
//   fill={selectedGroup === gid ? "rgb(3, 169, 244)": "rgb(248,248,248)"}
//   x={-16}
//   y={-15}/>*/}
